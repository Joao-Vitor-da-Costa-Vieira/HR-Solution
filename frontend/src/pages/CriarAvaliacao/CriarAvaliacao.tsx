import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Navegacao } from "../../components/layout/Navegacao/Navegacao"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Trash2, Plus } from "lucide-react";

type Campo = {
  id: string;
  tipo: "lideranca" | "caracteristicas";
  pergunta: string;
  opcoes?: string[];
};

export default function FormBuilder() {
  const [campos, setCampos] = useState<Campo[]>([]);
  const [nomeFormulario, setNomeFormulario] = useState("Novo Formulário");

  const adicionarCampo = (tipo: Campo["tipo"]) => {
    const novo: Campo = {
      id: crypto.randomUUID(),
      tipo,
      pergunta: "",
      opcoes: tipo === "caracteristicas" || tipo === "lideranca" ? ["Opção 1", "Opção 2"] : [],
    };
    setCampos([...campos, novo]);
  };

  const atualizarCampo = (id: string, campoAtualizado: Partial<Campo>) => {
    setCampos(campos.map(c => (c.id === id ? { ...c, ...campoAtualizado } : c)));
  };

  const removerCampo = (id: string) => {
    setCampos(campos.filter(c => c.id !== id));
  };

  const exportarJSON = () => {
    const json = JSON.stringify({ nomeFormulario, campos }, null, 2);
    console.log(json);
    alert("JSON do formulário exportado no console!");
  };

  return (<div>
    <Navegacao />
    <div className="min-h-screen bg-gray-50 p-10">

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Painel lateral */}
        <Card className="md:col-span-1 shadow-sm">
          <CardHeader>
            <CardTitle>Ferramentas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button onClick={() => adicionarCampo("lideranca")} className="w-full" variant="outline">
              <Plus className="w-4 h-4 mr-2" /> Liderança
            </Button>
            <Button onClick={() => adicionarCampo("caracteristicas")} className="w-full" variant="outline">
              <Plus className="w-4 h-4 mr-2" /> Características
            </Button>
            <Separator />
            <Button onClick={exportarJSON} className="w-full">
              Exportar JSON
            </Button>
          </CardContent>
        </Card>

        {/* Área de edição */}
        <Card className="md:col-span-2 shadow-md">
          <CardHeader>
            <CardTitle>Editor de Formulário</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="nome">Nome do Formulário</Label>
              <Input
                id="nome"
                value={nomeFormulario}
                onChange={e => setNomeFormulario(e.target.value)}
              />
            </div>

            <Separator />

            {campos.map((campo: any) => (
        <Card key={campo.id} className="relative shadow-sm">
          <CardContent className="space-y-4 p-5">
            {/* Botão de remover */}
            <button
              type="button"
              onClick={() => removerCampo(campo.id)}
              className="absolute right-3 top-3 text-gray-400 hover:text-red-500 transition-colors"
            >
              <Trash2 size={16} />
            </button>

            {/* Tipo de campo */}
            <div>
              <Label>Tipo de Campo</Label>
              <Select
                value={campo.tipo}
                onValueChange={(v) =>
                  atualizarCampo(campo.id, { tipo: v as any })
                }
              >
                <SelectTrigger className="w-[200px] mt-1">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dissertativa">Dissertativa</SelectItem>
                  <SelectItem value="likert">Likert</SelectItem>
                  <SelectItem value="texto">Texto</SelectItem>
                  <SelectItem value="selecao">Seleção</SelectItem>
                  <SelectItem value="caracteristicas">Características</SelectItem>
                  <SelectItem value="lideranca">Liderança</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Pergunta */}
            <div>
              <Label>Pergunta</Label>
              <Input
                value={campo.pergunta}
                onChange={(e) =>
                  atualizarCampo(campo.id, { pergunta: e.target.value })
                }
                placeholder="Digite a pergunta..."
                className="mt-1"
              />
            </div>

            {/* Opções (para tipos com alternativas) */}
            {(campo.tipo === "caracteristicas" ||
              campo.tipo === "lideranca" ||
              campo.tipo === "selecao") && (
              <div className="space-y-3">
                <Label>Opções</Label>
                {campo.opcoes?.map((op: string, i: number) => (
                  <div key={i} className="space-y-2 border p-3 rounded-md">
                    <Input
                      value={op}
                      onChange={(e) => {
                        const novas = [...(campo.opcoes || [])];
                        novas[i] = e.target.value;
                        atualizarCampo(campo.id, { opcoes: novas });
                      }}
                      placeholder={`Opção ${i + 1}`}
                    />

                    {/* Campos extras — só para "características" */}
                    {campo.tipo === "caracteristicas" && (
                      <div className="grid grid-cols-3 gap-2">
                        <Label className="flex flex-col text-xs">
                          <span>Atitude</span>
                          <select
                            defaultValue={3}
                            className="border rounded-md p-1 text-sm"
                          >
                            {[1, 2, 3, 4, 5].map((v) => (
                              <option key={v}>{v}</option>
                            ))}
                          </select>
                        </Label>

                        <Label className="flex flex-col text-xs">
                          <span>Preparo</span>
                          <select
                            defaultValue={3}
                            className="border rounded-md p-1 text-sm"
                          >
                            {[1, 2, 3, 4, 5].map((v) => (
                              <option key={v}>{v}</option>
                            ))}
                          </select>
                        </Label>

                        <Label className="flex flex-col text-xs">
                          <span>Desempenho</span>
                          <select
                            defaultValue={3}
                            className="border rounded-md p-1 text-sm"
                          >
                            {[1, 2, 3, 4, 5].map((v) => (
                              <option key={v}>{v}</option>
                            ))}
                          </select>
                        </Label>
                      </div>
                    )}
                    {campo.tipo === "lideranca" && (
                      <div className="grid grid-cols-3 gap-2">
                        <div className="flex items-center gap-3 border rounded-md p-3 bg-white shadow-sm">
                          {/* Tipo de liderança */}
                          <div className="flex flex-col w-full">
                            <Label className="text-xs font-medium mb-1">Tipo de Liderança</Label>
                            <select
                              className="border rounded-md p-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                              defaultValue="Comandante"
                            >
                              <option>Comandante</option>
                              <option>Treinador</option>
                              <option>Orientador</option>
                              <option>Desafiador</option>
                            </select>
                          </div>

                          {/* Peso */}
                          <div className="flex flex-col w-1/3">
                            <Label className="text-xs font-medium mb-1">Peso</Label>
                            <select
                              defaultValue={3}
                              className="border rounded-md p-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              {[1, 2, 3, 4, 5].map((v) => (
                                <option key={v}>{v}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    atualizarCampo(campo.id, {
                      opcoes: [...(campo.opcoes || []), "Nova opção"],
                    })
                  }
                  className="mt-2"
                >
                  <Plus size={14} className="mr-2" /> Adicionar opção
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      ))}

            {campos.length === 0 && (
              <p className="text-gray-500 text-center italic">
                Nenhum campo adicionado ainda.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
    </div>
  );
}