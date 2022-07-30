import { FaRegStar } from 'react-icons/fa';
import styled from 'styled-components';
export const Article = () => {
    return (
        <>
            <ArticleCard>
                <div>Author</div>
                <div>2022年5月18日</div>
                <div>記事のタイトル</div>
                <div>
                    <div>
                        <FaRegStar />
                        <div>14</div>
                    </div>
                </div>
            </ArticleCard> 
        </>
    )
}

const ArticleCard = styled.div`
    background-color: #fff;
`
