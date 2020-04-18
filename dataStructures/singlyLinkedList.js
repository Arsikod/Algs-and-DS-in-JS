//piece of data - val
//reference to next node - next

class Node {
	constructor(val) {
		this.value = val
		this.next = null
	}
}
class SinglyLinkedList {
	constructor() {
		this.length = 0
		this.head = null
		this.tail = null
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
			this.tail.next = newNode //placing new node to the end
			this.tail = newNode //setting tail as a new node
		}
		this.length++
		return this //return the whole list
	}

	pop() {
		if (this.isEmpty()) {
			return undefined
		}
		let current = this.head
		for (let i = 0; i < this.length - 2; i++) {
			current = current.next
			i++
		}
		let popped = this.tail
		this.tail = current
		this.tail.next = null
		this.length--
		if (this.length === 0) {
			this.head = null
			this.tail = null
		}
		return popped
	}

	shift() {
		if (this.isEmpty()) {
			return undefined
		}

		let oldHead = this.head
		this.head = this.head.next
		this.length--
		if (this.length === 0) {
			this.tail = null
		}
		return oldHead
	}

	unShift(value) {
		let newNode = new Node(value)
		if (this.isEmpty()) {
			this.head = newNode
			this.tail = this.head
		} else {
			let oldHead = this.head
			this.head = newNode
			newNode.next = oldHead
		}
		this.length++
		return this
	}
}

let list = new SinglyLinkedList()

list.unShift("JayZ")

console.log(list)
