import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

interface ToolTipComponenetProps {
    children: React.ReactNode;
    message: string;
}

const ToolTipComponenet: React.FC<ToolTipComponenetProps> = ({
    children, message
}) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>{children}</TooltipTrigger>
                <TooltipContent>{message}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default ToolTipComponenet