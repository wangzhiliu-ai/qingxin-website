import { Route, Routes } from 'react-router-dom'
import { Layout } from './components'
import { About, CityPartner, Home, Hotel, NotFound, Safety, Services } from './pages'

export default function App() {
  return <Layout><Routes><Route path="/" element={<Home/>}/><Route path="/hotel" element={<Hotel/>}/><Route path="/city-partner" element={<CityPartner/>}/><Route path="/safety" element={<Safety/>}/><Route path="/services" element={<Services/>}/><Route path="/about" element={<About/>}/><Route path="*" element={<NotFound/>}/></Routes></Layout>
}
