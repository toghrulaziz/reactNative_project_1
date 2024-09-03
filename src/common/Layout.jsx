import CustomHeader from "./CustomHeader"
import { StyledView } from "./StyledComponents"

const Layout = ({ children, title }) => {
    return (
        <StyledView className="flex-1">
            <CustomHeader title={title} />
            {children}
        </StyledView>
    )
}

export default Layout

