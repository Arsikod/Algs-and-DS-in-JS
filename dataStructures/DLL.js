class Node {
	constructor(val) {
		this.value = val
		this.next = null
		this.prev = null
	}
}

class DoublyLL {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	isEmpty() {
		return this.head === null && this.tail === null
	}

	push(val) {
		let newNode = new Node(val)
		if (this.isEmpty()) {
			this.head = newNode
			this.tail = this.head
		} else {
			let oldTail = this.tail
			oldTail.next = newNode
			newNode.prev = oldTail
			this.tail = newNode
		}
		this.length++
	}

	pop() {
		if (this.isEmpty()) {
			return undefined
		}
		let popped = this.tail

		if (this.length === 1) {
			this.head = null
			this.tail = null
		} else {
			this.tail = popped.prev
			this.tail.next = null
			popped.prev = null
		}

		this.length--

		return popped
	}

	shift() {
		if (this.isEmpty()) {
			return undefined
		}
		let popped = this.head
		if (this.length === 1) {
			this.head = null
			this.tail = null
		} else {
			this.head = popped.next
			this.head.prev = null
			popped.next = null
		}
		this.length--
		return popped
	}

	unshift(val) {
		let newNode = new Node(val)
		if (this.isEmpty()) {
			this.head = newNode
			this.tail = this.head
		} else {
			let oldHead = this.head
			this.head = newNode
			newNode.next = oldHead
			oldHead.prev = newNode
		}
		this.length++
		return this
	}
	get(idx) {
		if (idx < 0 || idx >= this.length) {
			return null
		}
		if (this.isEmpty()) {
			return undefined
		}

		if (idx <= this.length / 2) {
			console.log(">>>>>>>>> working from start")
			let counter = 0
			let current = this.head
			while (idx !== counter) {
				current = current.next
				counter++
			}
			return current
		} else {
			console.log("<<<<<<<<< working from end")
			let counter = this.length - 1
			let current = this.tail
			while (idx !== counter) {
				current = current.prev
				counter--
			}
			return current
		}
	}

	set(idx, val) {
		let foundNode = this.get(idx)
		if (foundNode) {
			foundNode.value = val
			return true
		}
		return false
	}

	insert(idx, val) {
		if (idx === 0) {
			return !!this.unshift(val)
		}
		if (idx === this.length) {
			return !!this.push(val)
		}
		let newNode = new Node(val)
		let prevNode = this.get(idx - 1)
		let nextNode = this.get(idx + 1)
		prevNode.next = newNode
		newNode.prev = prevNode
		nextNode.prev = newNode
		newNode.next = nextNode
		this.length++

		return true
	}

	remove(idx) {
		if (idx < 0 || idx > this.length - 1) {
			return undefined
		}
		if (idx === 0) {
			return !!this.shift()
		}
		if (idx === this.length - 1) {
			return !!this.pop()
		}
		let nodeToRemove = this.get(idx)
		let prevNode = nodeToRemove.prev
		let nextNode = nodeToRemove.next
		nodeToRemove.prev = null
		nodeToRemove.next = null
		prevNode.next = nextNode
		nextNode.prev = prevNode

		if (this.length === 1) {
			this.head = null
			this.tail = null
		}
		this.length--
		return nodeToRemove
	}
}

let list = new DoublyLL()
list.push("hi")
list.push("how")
list.push("are")

list.remove()

console.log(list)
