import Box from '@mui/material/Box';
import NavTiles from './components/NavTiles';

const items = [
  {
    img: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
    text: 'Content 1',
  },
  {
    img: 'https://mui.com/static/images/cards/paella.jpg',
    text: 'Content 2',
  },
  {
    img: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
    text: 'Content 3',
  },
  {
    img: 'https://mui.com/static/images/cards/paella.jpg',
    text: 'Content 4',
  },
  {
    img: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
    text: 'Content 5',
  },
]

function App() {
  return (
    <NavTiles items={items}/>
  )
}

export default App;
