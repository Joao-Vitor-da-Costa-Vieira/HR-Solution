import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./GraficoBarras.css";

type Props = {
    dados: any;
    nome: string;
    color?: string;
}

export const GraficoBarras = ({dados, nome, color}: Props) => {
    return (
        <Card>
            <CardHeader>
              <CardTitle>{nome}</CardTitle>
            </CardHeader>
            <CardContent style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <BarChart data={dados}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 10]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="score" fill={color ? color : "#467FF7"} name="Desempenho" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}