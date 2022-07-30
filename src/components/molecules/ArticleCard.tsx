import { IconContext } from 'react-icons';
import { FaRegStar } from 'react-icons/fa';
import styled from 'styled-components';
export const ArticleCard = () => {
    return (
        <>
            <ArticleCardBody>
                <div>Author</div>
                <Sdate>2022年5月18日</Sdate>
                <Stitle>記事のタイトル</Stitle>
                <Sfavorite>
                    <IconContext.Provider value={{ color: '#FF3C3C', size: '32px' }}>
                        <FaRegStar />
                    </IconContext.Provider>
                    <SfavoriteNumber>14</SfavoriteNumber>
                </Sfavorite>
            </ArticleCardBody> 
        </>
    )
}

const ArticleCardBody = styled.div`
    background-color: #fff;
    padding: 16px;
`

const Sdate = styled.div`
    font-size: 12px;
    margin-top: 8px;
    margin-bottom: 40px;
`

const Stitle = styled.div`
    font-size: 24px;
    margin-bottom: 44px;
`

const Sstar = styled(FaRegStar)`
    width: 32px;
    height: 32px;
`

const Sfavorite = styled.div`
    display: flex;
    font-size: 24px;
    justify-content: flex-end;
`
const SfavoriteNumber = styled.div`
    padding: 4px 0px;
`
