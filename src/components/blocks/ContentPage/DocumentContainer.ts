import styled from '@emotion/styled'

const DocumentContainer = styled('div')`
  grid-area: content;
  color: ${(props) => props.theme.colors.warSecondary};
  font-size: 18px;
  font-weight: 400;

  p {
    margin: 18px 0;
    line-height: 28px;
  }

  b {
    cursor: text;
    font-weight: 700;
  }

  i {
    cursor: text;
    font-style: italic;
  }

  u {
    cursor: text;
    text-decoration: underline;
  }

  blockquote {
    padding: 12px;
    border-left: 5px ${(props) => props.theme.colors.warPrimary} solid;
    border-radius: 2px;
    box-shadow: 0 4.5px 10px rgb(0 0 0 / 5%), 0 0.5px 1px rgb(0 0 0 / 5%);
    background-color: #303041;

    > p {
      margin: 0;
    }
  }

  a {
    color: ${(props) => props.theme.colors.warLink};
    transition: all ${(props) => props.theme.transitions.normal};

    &:hover {
      color: ${(props) => props.theme.colors.warLinkHover};
    }
  }

  ul,
  ol {
    margin-left: 32px;
  }

  ul {
    list-style: circle;
  }

  ol {
    list-style: decimal;
  }

  li {
    p {
      margin-top: 6px;
      margin-bottom: 6px;
    }
  }
`

export default DocumentContainer
