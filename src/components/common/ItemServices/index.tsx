interface ItemSectionProps {
  item: { img: string; title: string; description: string; link: string }
}

export const ItemSection = ({ item }: ItemSectionProps) => <li>Item</li>
