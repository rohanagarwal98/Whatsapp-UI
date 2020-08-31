
let user = {
	id: 0,
	name: "Rohan",
	number: "+91 86969 13425",
	pic: "images/00.png"
};

let contactList = [
	{
		id: 0,
		name: "Rohan",
		number: "+91 86969 13425",
		pic: "images/00.png",
		lastSeen: "Jun 30 2020 17:58:02"
	},
	{
		id: 1,
		name: "Piyush",
		number: "+91 98232 27261",
		pic: "images/pp.png",
		lastSeen: "Jun 28 2020 22:18:21"
	},
	{
		id: 2,
		name: "Satyansh",
		number: "+91 72631 2437",
		pic: "images/ss.jpg",
		lastSeen: "Jun 30 2020 19:23:16"
	},
	{
		id: 3,
		name: "Aman",
		number: "+91 98232 63547",
		pic: "images/ap.jpg",
		lastSeen: "Apr 29 2020 11:16:42"
	},
	{
		id: 4,
		name: "Bharat",
		number: "+91 72781 38213",
		pic: "images/bp.jpg",
		lastSeen: "Apr 27 2020 17:28:10"
	}
];

let groupList = [
	{
		id: 1,
		name: "Programmers",
		members: [0, 1, 3],
		pic: "images/0923102932_aPRkoW.jpg"
	},
	{
		id: 2,
		name: "Web Developers",
		members: [0, 2],
		pic: "images/1921231232_Ag1asE.png"
	},
	{
		id: 3,
		name: "notes",
		members: [0],
		pic: "images/8230192232_asdEWq2.png"
	}
];

// message status - 0:sent, 1:delivered, 2:read

let messages = [
	{
		id: 0,
		sender: 2,
		body: "where are you, buddy?",
		time: "June 25, 2020 13:21:03",
		status: 2,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 1,
		sender: 0,
		body: "at home",
		time: "June 25, 2020 13:22:03",
		status: 2,
		recvId: 2,
		recvIsGroup: false
	},
	{
		id: 2,
		sender: 0,
		body: "Who did that??'?",
		time: "June 25, 2018 18:15:23",
		status: 2,
		recvId: 3,
		recvIsGroup: false
	},
	{
		id: 3,
		sender: 3,
		body: "I dont know.. You??",
		time: "June 25, 2020 21:05:11",
		status: 2,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 4,
		sender: 0,
		body: "That Was not me..",
		time: "June 26, 2020 09:17:03",
		status: 1,
		recvId: 3,
		recvIsGroup: false
	},
	{
		id: 5,
		sender: 3,
		body: "anyone online?",
		time: "June 27, 2020 18:20:11",
		status: 0,
		recvId: 1,
		recvIsGroup: true
	},
	{
		id: 6,
		sender: 1,
		body: "Miss college dude?",
		time: "June 27, 2020 17:23:01",
		status: 1,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 7,
		sender: 0,
		body: "are you going to the party tonight?",
		time: "June 27, 2020 08:11:21",
		status: 2,
		recvId: 2,
		recvIsGroup: false
	},
	{
		id: 8,
		sender: 2,
		body: "no, i've some work to do..are you?",
		time: "June 27, 2020 08:22:12",
		status: 2,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 9,
		sender: 0,
		body: "Nattu",
		time: "June 27, 2020 08:31:23",
		status: 1,
		recvId: 2,
		recvIsGroup: false
	},
	{
		id: 10,
		sender: 0,
		body: "Wanna Play Pubg? Come soon...",
		time: "June 27, 2020 22:41:55",
		status: 2,
		recvId: 4,
		recvIsGroup: false
	},
	{
		id: 11,
		sender: 1,
		body: "yeah, i'm online",
		time: "June 28 2020 17:10:21",
		status: 0,
		recvId: 1,
		recvIsGroup: true
	}
];

let MessageUtils = {
	getByGroupId: (groupId) => {
		return messages.filter(msg => msg.recvIsGroup && msg.recvId === groupId);
	},
	getByContactId: (contactId) => {
		return messages.filter(msg => {
			return !msg.recvIsGroup && ((msg.sender === user.id && msg.recvId === contactId) || (msg.sender === contactId && msg.recvId === user.id));
		});
	},
	getMessages: () => {
		return messages;
	},
	changeStatusById: (options) => {
		messages = messages.map((msg) => {
			if (options.isGroup) {
				if (msg.recvIsGroup && msg.recvId === options.id) msg.status = 2;
			} else {
				if (!msg.recvIsGroup && msg.sender === options.id && msg.recvId === user.id) msg.status = 2;
			}
			return msg;
		});
	},
	addMessage: (msg) => {
		msg.id = messages.length + 1;
		messages.push(msg);
	}
};