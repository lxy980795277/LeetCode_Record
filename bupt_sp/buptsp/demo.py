# -*- coding: UTF-8 -*-

import json
import re


class Service_portfolio:

    def __init__(self, KGfile, Profile):
        with open(KGfile, "r", encoding="utf-8") as f:
            file = f.read()
            self.KGdata = json.loads(file)
        with open(Profile, "r", encoding="utf-8") as f:
            file = f.read()
            self.Prodata = json.loads(file)
        self.process_list = list(self.Prodata.keys())
        self.attribute_list = [["内存资源", "内存", "资源"], ["网络带宽", "带宽"], ["响应时间", "响应", "时间"]]

    def analyse(self, sentence):
        """
        :param sentence: user natural language question
        :return:
        """
        candi_process, candi_attribute, candi_value, candi_condition = None, None, None, None
        sentence = sentence.strip("\t")
        # process name
        for process in self.process_list:
            if sentence.find(process) != -1:
                candi_process = process
                sentence = sentence.replace(candi_process, "")
                break

        # attribute name
        for attribute in self.attribute_list:
            for attr in attribute:
                if sentence.find(attr) != -1:
                    candi_attribute = attribute[0]
                    break

        # value
        value_list = re.findall(r"\d+\.?\d*", sentence)
        if len(value_list) == 1:
            candi_value = float(value_list[0])

        # condition
        # 大于：1； 小于：2；大于等于：3；下于等于：4；等于：5
        greater_list = ["大于", "超过", "多于", "高于", "超出"]
        less_list = ["小于", "少于", "低于"]
        less_list_not = ["不足"]
        greater_equal_list = ["大于等于", "最少", "至少"]
        greater_equal_list_or = ["大于或等于", "大于和等于", "大于以及等于", "大于及等于",
                                 "多于或等于", "多于和等于", "多于以及等于", "多于及等于", ]
        greater_equal_list_no = ["不少于", "不小于", "不低于"]
        less_equal_list = ["小于等于", "仅剩下", "仅剩", "剩下", "最多", "至多", "仅是", "仅有"]
        less_equal_list_no = ["不多于", "不超过", "不大于", "不高于"]
        less_equal_list_or = ["小于或等于", "小于和等于", "小于以及等于", "小于及等于",
                              "少于或等于", "少于和等于", "少于以及等于", "少于及等于", ]
        equal_list = ["相等", "等于", "相同"]
        equal_list_is = ["是", "为", "有"]
        if sentence.find("不") != -1:
            for less in less_list_not:
                if sentence.find(less) != -1:
                    candi_condition = 2
                    break
            if candi_condition is None:
                for greater_equal in greater_equal_list_no:
                    if sentence.find(greater_equal) != -1:
                        candi_condition = 3
                        break
            if candi_condition is None:
                for less_equal in less_equal_list_no:
                    if sentence.find(less_equal) != -1:
                        candi_condition = 4
                        break
        elif sentence.find("和") != -1 or sentence.find("或") != -1:
            for greater_equal in greater_equal_list_or:
                if sentence.find(greater_equal) != -1:
                    candi_condition = 3
                    break
            if candi_condition is None:
                for less_equal in less_equal_list_or:
                    if sentence.find(less_equal) != -1:
                        candi_condition = 4
                        break
        else:
            for greater in greater_list:
                if sentence.find(greater) != -1:
                    candi_condition = 1
                    break
            if candi_condition is None:
                for less in less_list:
                    if sentence.find(less) != -1:
                        candi_condition = 2
                        break
            if candi_condition is None:
                for greater_equal in greater_equal_list:
                    if sentence.find(greater_equal) != -1:
                        candi_condition = 3
                        break
            if candi_condition is None:
                for less_equal in less_equal_list:
                    if sentence.find(less_equal) != -1:
                        candi_condition = 4
                        break
            if candi_condition is None:
                for equal in equal_list:
                    if sentence.find(equal) != -1:
                        candi_condition = 4
                        break
            if candi_condition is None and candi_attribute is not None:
                for equal in equal_list_is:
                    if sentence.find(candi_attribute + equal) != -1:
                        candi_condition = 4
                        break

        # if all([candi_process, candi_attribute, candi_value, candi_condition]):
        #     return candi_process, candi_attribute, candi_value, candi_condition
        # else:
        #     return None
        return candi_process, candi_attribute, candi_value, candi_condition

    def cal(self, flag, extreme, attribute, graph, serviceValues):
        extremevalues = {}
        temvalues = {}
        sumvalue = 0
        message="该模块由如下服务进行组合：\n"
        if flag == 2:
            if attribute == "内存资源":
                for service, instance in serviceValues.items():
                    for name, value in instance.items():
                        if value == min(instance.values()):
                            extremevalues[name] = value
                            break
                print(extremevalues)
                for instance,extremevalue in extremevalues.items():
                    sumvalue += extremevalue
                    message+="服务"+instance+"消耗内存资源"+str(extremevalue)+"G;\n"
                message+="总共消耗内存资源"+str(sumvalue)+"G。\n"
                print(sumvalue)
            elif attribute == "网络带宽":
                for service, instance in serviceValues.items():
                    for name, value in instance.items():
                        if value == min(instance.values()):
                            extremevalues[service] = [name, value]
                            temvalues[service] = [name, value]
                            message+="服务"+name+"占用网络带宽"+str(value)+"Mbps;\n"
                            break
                print(extremevalues)
                for service, instance in temvalues.items():
                    tem = instance[1]
                    for serviceName, node in graph.items():
                        if service != serviceName and node == graph[service]:
                            tem = min(tem, temvalues[serviceName][1])
                            temvalues[serviceName][1] = 0
                            temvalues[service][1] = 0
                    sumvalue += tem
                message+="总共占用网络带宽"+str(sumvalue)+"Mbps。\n"
                print(extremevalues)
                print(sumvalue)
            elif attribute == "响应时间":
                for service, instance in serviceValues.items():
                    for name, value in instance.items():
                        if value == min(instance.values()):
                            extremevalues[service] = [name, value]
                            temvalues[service] = [name, value]
                            message+="服务"+name+"的响应时间为"+str(round(value,2))+"S;\n"
                            break
                print(extremevalues)
                for service, instance in temvalues.items():
                    tem = instance[1]
                    for serviceName, node in graph.items():
                        if service != serviceName and node == graph[service]:
                            tem = min(tem, temvalues[serviceName][1])
                            temvalues[serviceName][1] = 0
                            temvalues[service][1] = 0
                    sumvalue += tem
                message+="总共响应时间为"+str(round(sumvalue,2))+"S。\n"
                print(extremevalues)
                print(sumvalue)
            if sumvalue < extreme:
                return message
            else:
                return "抱歉！服务库中没有满足需求的服务组合！"
        if flag == 1:
            if attribute == "内存资源":
                for service, instance in serviceValues.items():
                    for name, value in instance.items():
                        if value == max(instance.values()):
                            extremevalues[name] = value
                            break
                print(extremevalues)
                for instance,extremevalue in extremevalues.items():
                    sumvalue += extremevalue
                    message+="服务"+instance+"消耗内存资源"+str(extremevalue)+"G;\n"
                message+="总共消耗内存资源"+str(sumvalue)+"G。\n"
                print(sumvalue)
            elif attribute == "网络带宽":
                for service, instance in serviceValues.items():
                    for name, value in instance.items():
                        if value == max(instance.values()):
                            extremevalues[service] = [name, value]
                            temvalues[service] = [name, value]
                            message+="服务"+name+"占用网络带宽"+str(value)+"Mbps;\n"
                            break
                print(extremevalues)
                for service, instance in temvalues.items():
                    tem = instance[1]
                    for serviceName, node in graph.items():
                        if service != serviceName and node == graph[service]:
                            tem = max(tem, temvalues[serviceName][1])
                            temvalues[serviceName][1] = 0
                            temvalues[service][1] = 0
                    sumvalue += tem
                message+="总共占用网络带宽"+str(sumvalue)+"Mbps。\n"
                print(extremevalues)
                print(sumvalue)
            elif attribute == "响应时间":
                for service, instance in serviceValues.items():
                    for name, value in instance.items():
                        if value == max(instance.values()):
                            extremevalues[service] = [name, value]
                            temvalues[service] = [name, value]
                            message+="服务"+name+"的响应时间为"+str(round(value,2))+"S;\n"
                            break
                print(extremevalues)
                for service, instance in temvalues.items():
                    tem = instance[1]
                    for serviceName, node in graph.items():
                        if service != serviceName and node == graph[service]:
                            tem = max(tem, temvalues[serviceName][1])
                            temvalues[serviceName][1] = 0
                            temvalues[service][1] = 0
                    sumvalue += tem
                message+="总共响应时间为"+str(round(sumvalue,2))+"S。\n"
                print(extremevalues)
                print(sumvalue)
            if sumvalue > extreme:
                return message
            else:
                return "抱歉！服务库中没有满足需求的服务组合！"
        if flag == 3:
            if attribute == "内存资源":
                for service, instance in serviceValues.items():
                    for name, value in instance.items():
                        if value == max(instance.values()):
                            extremevalues[name] = value
                            break
                print(extremevalues)
                for instance,extremevalue in extremevalues.items():
                    sumvalue += extremevalue
                    message+="服务"+instance+"消耗内存资源"+str(extremevalue)+"G;\n"
                message+="总共消耗内存资源"+str(sumvalue)+"G。\n"
                print(sumvalue)
            elif attribute == "网络带宽":
                for service, instance in serviceValues.items():
                    for name, value in instance.items():
                        if (value == max(instance.values())):
                            extremevalues[service] = [name, value]
                            temvalues[service] = [name, value]
                            message+="服务"+name+"占用网络带宽"+str(value)+"Mbps;\n"
                            break
                print(extremevalues)
                for service, instance in temvalues.items():
                    tem = instance[1]
                    for serviceName, node in graph.items():
                        if service != serviceName and node == graph[service]:
                            tem = max(tem, temvalues[serviceName][1])
                            temvalues[serviceName][1] = 0
                            temvalues[service][1] = 0
                    sumvalue += tem
                message+="总共占用网络带宽"+str(sumvalue)+"Mbps。\n"
                print(extremevalues)
                print(sumvalue)
            elif attribute == "响应时间":
                for service, instance in serviceValues.items():
                    for name, value in instance.items():
                        if (value == max(instance.values())):
                            extremevalues[service] = [name, value]
                            temvalues[service] = [name, value]
                            message+="服务"+name+"的响应时间为"+str(round(value,2))+"S;\n"
                            break
                print(extremevalues)
                for service, instance in temvalues.items():
                    tem = instance[1]
                    for serviceName, node in graph.items():
                        if service != serviceName and node == graph[service]:
                            tem = max(tem, temvalues[serviceName][1])
                            temvalues[serviceName][1] = 0
                            temvalues[service][1] = 0
                    sumvalue += tem
                message+="总共响应时间为"+str(round(sumvalue,2))+"S。\n"
                print(extremevalues)
                print(sumvalue)
            if sumvalue >= extreme:
                return message
            else:
                return "抱歉！服务库中没有满足需求的服务组合！"
        if flag == 4:
            if attribute == "内存资源":
                for service, instance in serviceValues.items():
                    for name, value in instance.items():
                        if value == min(instance.values()):
                            extremevalues[name] = value
                            break
                print(extremevalues)
                for instance,extremevalue in extremevalues.items():
                    sumvalue += extremevalue
                    message+="服务"+instance+"消耗内存资源"+str(extremevalue)+"G;\n"
                message+="总共消耗内存资源"+str(sumvalue)+"G。\n"
                print(sumvalue)
            elif attribute == "网络带宽":
                for service, instance in serviceValues.items():
                    for name, value in instance.items():
                        if value == min(instance.values()):
                            extremevalues[service] = [name, value]
                            temvalues[service] = [name, value]
                            message+="服务"+name+"占用网络带宽"+str(value)+"Mbps;\n"
                            break
                print(extremevalues)
                for service, instance in temvalues.items():
                    tem = instance[1]
                    for serviceName, node in graph.items():
                        if service != serviceName and node == graph[service]:
                            tem = min(tem, temvalues[serviceName][1])
                            temvalues[serviceName][1] = 0
                            temvalues[service][1] = 0
                    sumvalue += tem
                message+="总共占用网络带宽"+str(sumvalue)+"Mbps。\n"
                print(extremevalues)
                print(sumvalue)
            elif attribute == "响应时间":
                for service, instance in serviceValues.items():
                    for name, value in instance.items():
                        if value == min(instance.values()):
                            extremevalues[service] = [name, value]
                            temvalues[service] = [name, value]
                            message+="服务"+name+"的响应时间为"+str(round(value,2))+"S;\n"
                            break
                print(extremevalues)
                for service, instance in temvalues.items():
                    tem = instance[1]
                    for serviceName, node in graph.items():
                        if service != serviceName and node == graph[service]:
                            tem = min(tem, temvalues[serviceName][1])
                            temvalues[serviceName][1] = 0
                            temvalues[service][1] = 0
                    sumvalue += tem
                print(extremevalues)
                print(sumvalue)
                message+="总共响应时间为"+str(round(sumvalue,2))+"S。\n"
            if sumvalue <= extreme:
                return message
            else:
                return "抱歉！服务库中没有满足需求的服务组合！"

    def reason(self, process, attribute):
        # service
        graph = self.Prodata[process]
        service_list = list(graph.keys())

        # query
        serviceValues = dict()
        for service in service_list:
            serviceValues[service] = {}
            atoservice_dict = self.KGdata[service]
            for atoservice in atoservice_dict.keys():
                serviceValues[service][atoservice] = atoservice_dict[atoservice][attribute]

        return graph, serviceValues

    def forward(self, sentence):
        candi_process, candi_attribute, candi_value, candi_condition = self.analyse(sentence)
        print(candi_process, candi_attribute, candi_value, candi_condition)
        if all([candi_process, candi_attribute, candi_value, candi_condition]):
            graph, serviceValues = self.reason(candi_process, candi_attribute)
            print(graph)
            print(serviceValues)
            answer = self.cal(candi_condition, candi_value, candi_attribute, graph, serviceValues)
            print(answer)
            return {"pic": candi_process, "answer": answer}
        else:
            print("非法输入")
            answer = "抱歉！没有匹配到"
            if candi_process is None:
                answer += "--功能模块"
            if candi_attribute is None:
                answer += "--服务属性"
            if candi_value is None:
                answer += "--数值"
            if candi_condition is None:
                answer += "--条件"
            answer += "。 请重新输入。"
            print(answer)
            return {"pic": None, "answer": answer}


if __name__ == "__main__":
    sp = Service_portfolio("service_data.json", "module_data.json")
    sp.forward("要求带宽小于15000Mbps, 模块3可以用哪些服务来完成呢")
