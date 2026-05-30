/**
 * Placeholder de download de PDF.
 * Substitua esta função pela geração real do relatório quando disponível.
 */
export function downloadRelatorio(nomeArea = '') {
  const slug = nomeArea
    ? nomeArea.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
    : 'carbontrack-space'

  const nomeArquivo = `relatorio-${slug}.pdf`

  // Conteúdo placeholder — será substituído pelo relatório gerado dinamicamente
  const conteudo = buildPlaceholderPDF(nomeArea)
  const blob = new Blob([conteudo], { type: 'application/pdf' })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = nomeArquivo
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

function buildPlaceholderPDF(nomeArea) {
  const titulo = nomeArea
    ? `Relatorio Ambiental - ${nomeArea}`
    : 'Relatorio Ambiental - CarbonTrack Space'

  const linhas = [
    'BT',
    '/F1 18 Tf',
    '50 750 Td',
    `(CarbonTrack Space) Tj`,
    '0 -28 Td',
    '/F1 13 Tf',
    `(${titulo}) Tj`,
    '0 -22 Td',
    '/F1 11 Tf',
    '(---------------------------------------------------) Tj',
    '0 -22 Td',
    '(Documento de demonstracao - versao provisoria.) Tj',
    '0 -18 Td',
    '(Este arquivo sera substituido pelo relatorio oficial gerado) Tj',
    '0 -18 Td',
    '(automaticamente com os dados reais da plataforma.) Tj',
    '0 -30 Td',
    '/F1 10 Tf',
    '(Plataforma: CarbonTrack Space  |  Monitoramento Ambiental com IA Espacial) Tj',
    'ET',
  ]

  const streamContent = linhas.join('\n')
  const streamLen = streamContent.length

  const objs = [
    '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj',
    '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj',
    [
      '3 0 obj',
      '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792]',
      '   /Resources << /Font << /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> >> >>',
      '   /Contents 4 0 R >>',
      'endobj',
    ].join('\n'),
    `4 0 obj\n<< /Length ${streamLen} >>\nstream\n${streamContent}\nendstream\nendobj`,
  ]

  // Calcula offsets reais para o xref
  const header = '%PDF-1.4\n'
  let pos = header.length
  const offsets = []

  for (const obj of objs) {
    offsets.push(pos)
    pos += obj.length + 1 // +1 pela newline separadora
  }

  const xrefPos = pos
  const xrefLines = [
    'xref',
    `0 ${objs.length + 1}`,
    '0000000000 65535 f ',
    ...offsets.map((o) => String(o).padStart(10, '0') + ' 00000 n '),
    'trailer',
    `<< /Size ${objs.length + 1} /Root 1 0 R >>`,
    'startxref',
    String(xrefPos),
    '%%EOF',
  ]

  return header + objs.join('\n') + '\n' + xrefLines.join('\n') + '\n'
}
