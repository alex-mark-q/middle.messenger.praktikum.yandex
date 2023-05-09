import { BlockMeta, CoreRouter } from 'core';

type WithRouterProps = { router: CoreRouter }

export function withRouter<P extends WithRouterProps>(WrappedBlock: BlockMeta<P>) {
  // @ts-expect-error No base constructor has the specified number of type arguments
  return class extends WrappedBlock<P> {
    public static componentName = WrappedBlock.componentName || WrappedBlock.name;

    constructor(props: P) {

      // появляется новое поле router, которое будет доступно в методе render компонента например Button
      super({ ...props, router: window.router });
    }
  } as BlockMeta<Omit<P, 'router'>>;
}
