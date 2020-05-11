import React from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import Code from './Code';

class Markdown extends React.PureComponent<{ source: string }> {
  render() {
    return (
      <ReactMarkdown
        source={this.props.source}
        renderers={{
          code: Code,
        }}
        escapeHtml={false}
      />
    );
  }
}

export default Markdown;
