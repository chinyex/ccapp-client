export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  text: string;
  time: string;
  mine: boolean;
}

export interface Chat {
  id: string;
  name: string;
  avatar: string;
  online: boolean;
  lastMessage: string;
  lastSeen: string;
  unread: number;
  messages: Message[];
}