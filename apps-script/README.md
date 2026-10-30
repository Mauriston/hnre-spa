# Web App de exportação (Apps Script)

O dashboard público **não** lê a planilha diretamente: ela contém dados pessoais dos pacientes.
O script `ExportDashboard.gs` lê as abas `tb_plantoes`, `tb_pacientes_eventos` e `CID-10`
e devolve apenas o snapshot compacto usado pelo painel (contagens por plantão e, por evento:
tipo, sexo, destino, especialidade, CID e continuidade). O nome do paciente é usado só
internamente para calcular a continuidade e nunca sai do script.

As colunas são localizadas pelo **nome do cabeçalho**, então reordenar colunas não quebra o export.

## Implantação

1. Abra a planilha → **Extensões → Apps Script**.
2. Crie um arquivo `ExportDashboard.gs` e cole o conteúdo de `apps-script/ExportDashboard.gs`.
3. (Recomendado) **Configurações do projeto → Propriedades do script** → adicione
   `EXPORT_TOKEN` com um valor aleatório longo (ex.: gerado em um gerenciador de senhas).
4. Selecione a função `testarExport` e clique em **Executar** — autorize o acesso e confira no
   log o número de plantões/eventos.
5. **Implantar → Nova implantação → Tipo: App da Web**
   - Executar como: **Eu**
   - Quem pode acessar: **Qualquer pessoa**
6. Copie a URL (`https://script.google.com/macros/s/.../exec`). Com token, a URL final é
   `https://script.google.com/macros/s/.../exec?token=SEU_TOKEN`.
7. Salve essa URL completa no GitHub como segredo `PA_EXPORT_URL` (veja o README principal).

> Ao alterar o código depois, use **Implantar → Gerenciar implantações → Editar → Nova versão**
> para manter a mesma URL.

## Atualização imediata (opcional)

Por padrão o GitHub atualiza o painel de hora em hora. Para atualizar logo após cada edição
da planilha:

1. No GitHub, crie um *fine-grained personal access token* restrito ao repositório
   `Mauriston/hnre-spa` com permissão **Contents: Read and write**.
2. Em **Propriedades do script**, adicione `GITHUB_TOKEN` com esse token.
3. Execute uma vez a função `instalarGatilho`.

A cada alteração na planilha, `dispararAtualizacaoGitHub` aciona o workflow (no máximo uma vez
a cada 5 minutos).
