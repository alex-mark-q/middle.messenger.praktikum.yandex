import { BlockClass } from 'core';

type WithChatProps = { chat: Chat | null };



export function withChat<P extends WithChatProps>(WrappedBlock: BlockClass<P>) {
	// @ts-expect-error No base constructor has the specified number of type arguments
	return class extends WrappedBlock<P> {
		public static componentName = WrappedBlock.componentName || WrappedBlock.name;

		constructor(props: P) {
			super({ ...props, chat: window.store.getState().chats });
		}
	} as BlockClass<Omit<P, 'chat'>>;
}
