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

	get(idx) {
		if (this.isEmpty()) {
			return undefined
		}
		if (idx < 0 || idx >= this.length) {
			return null
		}
		let current = this.head
		for (let i = 0; i < this.length; i++) {
			if (idx === i) {
				return current
			}
			current = current.next
		}
	}

	set(idx, value) {
		let node = this.get(idx)
		if (node) {
			node.value = value
			return true
		}
		return false
	}

	insert(idx, value) {
		if (idx < 0 || idx > this.length) {
			return false
		}
		//push to the end
		if (idx === this.length) {
			return !!this.push(value)
		}
		if (idx === 0) {
			return !!this.unShift(value)
		}

		let newNode = new Node(value)
		let prevNode = this.get(idx - 1)
		let nextNode = this.get(idx + 1)
		prevNode.next = newNode
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
		let prevNode = this.get(idx - 1)
		let nextNode = this.get(idx + 1)
		prevNode.next = nextNode
		nodeToRemove.next = null
		this.length--
		return nodeToRemove
	}

	reverse() {
		let node = this.head
		this.head = this.tail
		this.tail = node

		let next
		let prev = null

		for (let i = 0; i < this.length; i++) {
			next = node.next //save into temp var one after current
			node.next = prev //break the link with regular next & reverse
			prev = node //move prev one step up
			node = next //set node to next value
		}
		return this
	}
}

let list = new SinglyLinkedList()

list.push(1)
list.push(2)
list.push(3)
list.push(4)

list.reverse()
console.log(list)
