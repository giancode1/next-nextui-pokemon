import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { CssBaseline } from '@nextui-org/react';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps,
            // styles: <>{initialProps.styles}</>
            styles: initialProps.styles
        }
    }
    render() {
        return (
            <Html lang="en">
                <Head>
                    {CssBaseline.flush()}
                    {/* <meta charSet='utf-8' />
                    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
                    <title>Document</title> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument

