import styled from "styled-components";

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 26rem;
  padding: 3.2rem;
  background-color: ${props => props.theme["base-post"]};
  border-radius: 10px;
  border: 2px solid ${props => props.theme["base-post"]};
  transition: 0.4s;


  &:hover{
    border: 2px solid ${props => props.theme["base-label"]};
  }
`

export const PostHeader = styled.header`
  display: flex;
  gap: 1.6rem;


  strong{
    flex: 1;
    color: ${props => props.theme["base-title"]};
    font-size: 2.0rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span{
    width: max-content;
   font-size: 1.4rem;
   color: ${props => props.theme["base-span"]};
  }
`

export const PostText = styled.p`
  margin-top: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`