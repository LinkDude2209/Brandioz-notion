import { Area, AreaChart, XAxis, YAxis } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { CardBody } from "../ui/threedcard";
import { CardContainer as ThreeDCardContainer, CardItem } from "../ui/threedcard";

export default function Cardtwo() {
    return (
        <ThreeDCardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-fit h-full rounded-xl p-6 border  ">
                <CardItem translateZ="50" className="h-full">
                    <Card className="w-full h-full border-2 border-white">
                        <CardHeader className="space-y-0 pb-0">
                            <CardDescription>Team Collaboration</CardDescription>
                            <CardTitle className="flex items-baseline gap-1 text-4xl tabular-nums">
                                15
                                <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                                    tasks
                                </span>
                                <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                                    completed today
                                </span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 h-full flex flex-col">
                            <ChartContainer
                                config={{
                                    tasks: {
                                        label: "Tasks Completed",
                                        color: "hsl(var(--chart-1))",
                                    },
                                }}
                            >
                                <AreaChart
                                    accessibilityLayer
                                    data={[
                                        { date: "2024-01-01", tasks: 10 },
                                        { date: "2024-01-02", tasks: 12 },
                                        { date: "2024-01-03", tasks: 8 },
                                        { date: "2024-01-04", tasks: 15 },
                                        { date: "2024-01-05", tasks: 7 },
                                        { date: "2024-01-06", tasks: 18 },
                                        { date: "2024-01-07", tasks: 15 },
                                    ]}
                                    margin={{ left: 0, right: 0, top: 0, bottom: 0 }}
                                >
                                    <XAxis dataKey="date" hide />
                                    <YAxis domain={["dataMin - 2", "dataMax + 2"]} hide />
                                    <defs>
                                        <linearGradient id="fillTasks" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="var(--color-tasks)" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="var(--color-tasks)" stopOpacity={0.1} />
                                        </linearGradient>
                                    </defs>
                                    <Area
                                        dataKey="tasks"
                                        type="monotone"
                                        fill="url(#fillTasks)"
                                        fillOpacity={0.4}
                                        stroke="var(--color-tasks)"
                                    />
                                    <ChartTooltip
                                        cursor={false}
                                        content={<ChartTooltipContent hideLabel />}
                                        formatter={(value) => (
                                            <div className="flex min-w-[120px] items-center text-xs text-muted-foreground">
                                                Tasks completed
                                                <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                                                    {value}
                                                    <span className="font-normal text-muted-foreground">
                                                        tasks
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    />
                                </AreaChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </CardItem>
            </CardBody>
        </ThreeDCardContainer>
    );
}