import styled from "styled-components";
import { SearchBox } from "../components/molecules/Search";
import { Button } from "../components/atoms/Buttons";

export const Top = () => {
    return (
        <>
            <div><Simg src={`${process.env.PUBLIC_URL}/images/topImg.png`} /></div>
            <Smain>
                <SearchCar>
                    <Title>車を探す</Title>
                    <SearchBox />
                    <Button text="メーカーから探す" href=""/><br/>
                    <Button text="50音順で探す" href=""/>
                </SearchCar>
                <SeeArticle>
                    <Title>記事を見る</Title>
                    <SearchBox />
                    <Button text="最新の記事" href="/articles"/><br/>
                    <Button text="人気の記事" href="/articles"/>
                </SeeArticle>
                <Discription>
                    <Sh2>モーターネットとは</Sh2>
                    <p>
                        　モーターネットとは、分かりづらい車のグレード、オプションの情報や、最新情報を記事でユーザー同士で共有できるコミュニティです。<br />
                        　網羅していない車種については順次更新していき、ゴールは分かりにくい車の情報を完全に整理することにあります。<br />
                        　データを管理するだけでなく、それを通じて車と皆さんとの距離感を縮めて、かつての日本の自動車産業の”勢い”を取り戻し、日本全体が活気付くきっかけの一つとなることができればいいなと考えています。
                    </p>
                    <Sh2>モーターネットでできること</Sh2>
                    <p>
                        ①車の基本情報（グレードなど）の検索<br />
                        　車の基本情報を見ることができます。<br />
                        　いざ車を購入しようと思うと、まずは車種を絞り込んで、そこからグレードを比較して、オプションの特徴を見て、と、とてもステップが複雑で、インターネットで車を探そうとすると、車に興味がある人でないとめんどくさい、と感じてしまうのが現状です。<br />
                        　そこで、車に関する情報をまとめて見られるようにし、高いハードルを誰でも越えられるようにしたいと思っています。<br /><br />

                        ②記事の共有機能<br />
                        　車に関する記事をユーザー同士で共有することができます。<br />
                        　車に興味を持っていただいた方の中には、どのようにしたら新型の車の情報が得られるのか、などがわかりづらいのが現状としてあると考えています。<br />
                        モーターネットでは、車に関する記事を会員登録していただいている方ならどなたでも投稿できるようにしています。<br />
                        自動車業界を盛り上げたい、と考えている方々、ぜひこのプラットフォームで情報発信しませんか？<br />
                    </p>
                </Discription>
            </Smain>
       </>
    )
}

const Simg = styled.img`
    width: 100%;
    height: auto;
`;

const Smain = styled.main`
    display: grid;
    grid-template-columns: 3.13% 1fr 3.13% 1fr 3.13%;
    grid-template-rows: 32px 354px 32px auto 32px;
    max-width:1300px;
    margin: 0 auto;
`;

const Title = styled.h2`
    text-align: center;
    font-size: 24px;
    margin-top: 15px;
    margin-bottom: 63px;
`;

const SearchCar = styled.div`
    grid-column: 2;
    grid-row: 2;
    background-color: #fff;
    text-align: center;
`;

const SeeArticle = styled.div`
    grid-column: 4;
    grid-row: 2;
    background-color: #fff;
    text-align: center;
`;

const Discription = styled.div`
    grid-column: 2 / 5;
    grid-row: 4;
    background-color: #fff;
    padding: 0 16px;
    line-height: 1.5;
    padding-bottom: 16px;
`;

const Sh2 = styled.h2`
    text-align: left;
    margin: 32px 0;
`
