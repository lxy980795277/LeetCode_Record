const merge = (a, b) => {
			var result = []
			if (Array.isArray(a) && Array.isArray(b)) {
				// todo
				var lena = a.length
			 var lenb = b.length
				var left = 0
				var right = 0
				while (left < lena && right < lenb) {
					if (a[left] < b[right]) {
						result.push(a[left])
						left = left + 1
					} else {
						result.push(b[right])
						right = right + 1
					}
				}
				while (left < lena) {
					result.push(a[left])
					left = left + 1
				}
				while (right < lenb) {
					result.push(b[right])
					right = right + 1
				}
				console.log(result)
			} else if (Array.isArray(a)) {
				result = a
				console.log(result)
			} else if (Array.isArray(b)) {
				result = b
				console.log(result)
			} else {
				console.log("不是数组")
			}
		};
		merge([2, 5, 6, 9], [1, 2, 3, 29]) // 返回 [1,2,2,3,5,6,9,29]
		merge([2, 5, 6, 9], []) // 返回 [1,2,2,3,5,6,9,29]
		merge([2, 5, 6, 9], [0, 0, 0, 0, 50, 51, 52, 53, 54]) // 返回 [1,2,2,3,5,6,9,29]
		merge([], []) // 返回 [1,2,2,3,5,6,9,29]
		merge([2, 5, 6, 9], [0, 0, 0, 0, 50, 51, 52, 53, 54]) // 返回 [1,2,2,3,5,6,9,29
		merge("asdasd", "111111") // 返回 [1,2,2,3,5,6,9,29]
		merge("asdasd", [1, 2, 3, 4, 5, 6]) // 返回 [1,2,2,3,5,6,9,29]
