import PropTypes from "prop-types"
import React from "react"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script type="text/javascript" src="https://script.crazyegg.com/pages/scripts/0091/3042.js" async="async" data-react-helmet="false" />
        {props.headComponents}

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4T32E5DNZW"></script>  
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;
                lc.src = 'https://widgets.theglobalcdn.com/charterhcg.com/widgets-main.js';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
