
export const transformUser = (data: UserDTO): User => {
  return {
    id: data.id,
    login: data.login,
    firstName: data.first_name,
    secondName: data.second_name,
    displayName: data.display_name,
    avatar: data.avatar,
    phone: data.phone,
    email: data.email,
  };
};

export const transformChat = (data: ChatDTO): Chat => {
	console.log("transformChat", data[0]);
	for (var i = 0, l = data.length; i < l; i++) {
	  return {
			id: data[i].id,
			title: data[i].title,
			avatar: data[i].avatar,
			createdBy: data[i].created_by,
			unreadCount: data[i].unread_count,
			lastMessage: data[i].last_message,
		};
	}

};
