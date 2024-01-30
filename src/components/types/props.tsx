export interface HeaderBtnProps {
  closeDrawer: () => void
  children: React.ReactNode
  section: string
  icon: JSX.Element
  offset: string
}

export type Item = {
  name: string
  description: string
  image: string
}

export interface CarouselProps {
  item: Item
}
