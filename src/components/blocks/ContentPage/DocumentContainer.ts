import styled from '@emotion/styled'
import theme from '../../../assets/theme'

const DocumentContainer = styled('div')`
  grid-area: content;
  color: ${(props) => props.theme.palette.secondary.main};
  font-size: 18px;
  font-weight: 400;

  p {
    margin: 18px 0;
    line-height: 28px;
    word-break: break-word;
  }

  p > b,
  p > strong {
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
    border-left: 5px ${(props) => props.theme.palette.primary.main} solid;
    border-radius: 2px;
    box-shadow: 0 4.5px 10px rgb(0 0 0 / 5%), 0 0.5px 1px rgb(0 0 0 / 5%);
    background-color: #303041;

    > p {
      margin: 0;
    }
  }

  a {
    color: #6788ff;
    transition: all ${theme.transitions.normal};

    &:hover {
      color: #526ed3;
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

  code {
    font-family: monospace;
    padding: 1px 5px;
    background: rgba(69, 70, 72, 0.64);
    border-radius: 2px;
  }

  h2 {
    margin-top: 50px;
    margin-bottom: 20px;
    font-size: 27.5px;
  }

  hr {
    margin: 25px 0;
    opacity: 0.25;
  }

  > div.image-container {
    margin: 25px 0 !important;
  }
`

export default DocumentContainer
