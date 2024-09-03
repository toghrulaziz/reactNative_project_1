import React from 'react'
import { StyledText, StyledView } from '@common/StyledComponents'

const InfoCard = ({ cardItem }) => {

    console.log(cardItem);

    return (
        <StyledView className="w-auto bg-white shadow shadow-zinc-300 rounded-lg m-5 p-4">
            <StyledText className="mb-2 text-lg font-semibold">{cardItem.name}</StyledText>
            <StyledText className="mb-2 font-light">{cardItem.email}</StyledText>
            <StyledText className="mb-2 text-right text-zinc-400">{cardItem.company.name}</StyledText>
        </StyledView>
    )
}

export default InfoCard

