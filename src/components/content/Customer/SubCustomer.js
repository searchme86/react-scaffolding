import React from "react";
import styled from "styled-components";

const SubCustomerContent = styled.div`
  margin: 10px 0 0 0;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
`;

const SubCustomer = () => {
  return (
    <SubCustomerContent>
      <Title>Customer의 sub 페이지 입니다</Title>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque beatae
      deleniti optio dolorem soluta quae temporibus ratione, ut debitis maiores
      quidem sed tempora consectetur labore explicabo perspiciatis quaerat,
      alias sint! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Ipsam sequi, ut hic magni in impedit amet pariatur totam fuga consequuntur
      adipisci molestias exercitationem cum ea non praesentium consectetur
      voluptates beatae! Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Excepturi praesentium tenetur quaerat totam ratione voluptate
      voluptatem reprehenderit assumenda quos sed pariatur in perspiciatis,
      natus autem, itaque ut nam, vel dolore! Lorem ipsum dolor, sit amet
      consectetur adipisicing elit. Ex id voluptatibus iusto adipisci qui, vero
      optio aspernatur commodi delectus fugiat aliquam, cupiditate nobis porro
      maiores perspiciatis ipsam, hic quis! Provident.
    </SubCustomerContent>
  );
};

export default SubCustomer;
