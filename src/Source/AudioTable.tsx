// src/Music.tsx
import AudioSpecTable from '../Component/AudioSpecTable'
import type { TheadMetaType } from '../Component/Type'

type Props = {
  audioType: 'Single human dancer' | 'Single non-human dancer' | 'Multiple human dancers' | 'Multiple non-human dancers'
}

const theadMetaArray: TheadMetaType[] = [
  { name: 'LORIS [1]', miniTopDescription: '', description: '', color: '#C00909' },
  { name: 'Textual-Inv [2]', miniTopDescription: '', description: '', color: '#C00909' },
  { name: 'PF-D2M', miniTopDescription: '', description: '', color: '#449948' },
]

const typeAbbrevMap = {
  'Single human dancer': 'single_human',
  'Single non-human dancer': 'single_non_human',
  'Multiple human dancers': 'multi_human',
  'Multiple non-human dancers': 'multi_non_human',
}
const totalWavFiles = import.meta.glob(`./audio/*.wav`, { eager: true, as: 'url' })
const totalImgFiles = import.meta.glob('./spec/*.png', { eager: true, as: 'url' })
const totalVidFiles = import.meta.glob(`./video/*.mp4`, { eager: true, as: 'url' })

function getFiles(audioType: 'Single human dancer' | 'Single non-human dancer' | 'Multiple human dancers' | 'Multiple non-human dancers') {
  const prefix = `/video/${typeAbbrevMap[audioType]}`;
  const files = totalVidFiles
  return Object.entries(files).filter(([path]) => path.includes(prefix))
    .sort(([aPath], [bPath]) => aPath.localeCompare(bPath, undefined, { numeric: true }))
    .map(([_, url]) => url)
}

function checkPrefix(urls: string[]): boolean {
  if (urls.length === 0) return false;

  const firstName = urls[0].split("/").pop() ?? "";
  const prefix = firstName.slice(0, 4);

  // check every file has the same prefix
  return urls.every(url => {
    const name = url.split("/").pop() ?? "";
    return name.startsWith(prefix);
  });
}

function checkGroup(urls: string[]): boolean {
  const EXPECTED_SUFFIXES = ['0_loris', '1_text_inv', '2_ours'];

  if (urls.length !== EXPECTED_SUFFIXES.length) {
    return false;
  }

  return urls.every((url, i) => url.includes(EXPECTED_SUFFIXES[i]));
}

export default function AudioTable({ audioType }: Props) {
  const vidFiles = getFiles(audioType)

  const tableAudio: string[][] = []
  for (let i = 0; i < vidFiles.length; i += 3) {
    const vidFilesGroup = vidFiles.slice(i, i + 3);
    if (!checkGroup(vidFilesGroup)) throw new Error(`File naming group mismatch in ${audioType} files.`)
    tableAudio.push(vidFilesGroup)
  }
  console.log(vidFiles)
  return (
    <AudioSpecTable
      tableName={`${audioType}`}
      theadMetaArray={theadMetaArray}
      tableAudio={tableAudio}
      audioWidth="400px"
    />
  )
}
