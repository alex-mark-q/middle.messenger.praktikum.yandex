declare global {
  export type Nullable<T> = T | null;

  export type Keys<T extends Record<string, unknown>> = keyof T;
  export type Values<T extends Record<string, unknown>> = T[Keys<T>];

  export type AppState = {
  	appIsInited: boolean;
  	isLoading: boolean;
  	screen: null;
  	loginFormError: null;
  	user: null;
  }

  // интерфейс предназначен для типизации данных в проекте
  export type User = {
  	id: string;
  	login: string;
  	firstName: string;
		secondName: string;
    displayName: string;
    avatar: string;
    phone: string;
    email: string;
  }

  export type Chat = {
  	id: number;
  	title: string;
  	avatar: string;
  	createdBy: number;
  	unreadCount: number;
  	lastMessage: boolean;
  }


  // интерфейс предназначен для типизации данных которые поступают с сервера
  export type UserDTO = {
  	id: number;
  	login: string;
  	first_name: string;
  	second_name: string;
  	display_name: string;
  	avatar: string:
  	phone: string;
  	email: string;
  }

  export type ChatDTO = {
  	id: number;
  	title: string;
  	avatar: string;
  	created_by: number;
  	unread_count: number;
  	last_message: boolean;
  }


}

export {}
