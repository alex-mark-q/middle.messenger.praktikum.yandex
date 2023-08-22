import { Block, HashRouter } from 'core';
import { withIsLoading, withRouter } from 'utils';
import template from 'bundle-text:./template.hbs';

import './layout.css';

interface LayoutProps {
  router: HashRouter;
  isLoading: boolean;
  fullScreen?: boolean;
  splash?: boolean;
  onNavigateToOnboarding?: () => void;
}

class Layout extends Block<LayoutProps> {
  static componentName = 'Layout';

  constructor(props: LayoutProps) {
    super(props);
  }

  protected render(): string {
    // language=hbs
    return template;
  }
}

const ComposedLayout = withRouter(withIsLoading(Layout));

export { ComposedLayout as Layout };
