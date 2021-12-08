
###
### 基于centos7为基础镜像的NODE镜像
###

FROM python
WORKDIR /buptsp
ADD buptsp/ /buptsp
RUN pip install --no-cache-dir -r requirements.txt
CMD ["gunicorn", "app:app", "-c", "./gunicorn.conf.py"]


