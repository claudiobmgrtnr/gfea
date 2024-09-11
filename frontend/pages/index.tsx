import Head from "next/head";
import ProductList from "../components/productList/ProductList";
import Header from "../components/header/header";
import { Main } from "../components/main/Main";
import { Layout } from "../components/layout/Layout";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Galaxus</title>
                <meta name="Galaxus" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Main>
                <ProductList />
            </Main>
        </Layout>
    );
}
