import { Tag } from '../config/types'
import { colors } from '../themes'

const tagStatusColor = (tag: Tag) => {
  switch (tag.region) {
    case 0:
      return colors.statusRed
    case 1:
      return colors.statusBlue
    case 2:
      return colors.statusYellow
    case 3:
      return colors.statusGreen
    default:
      return colors.logoGray
  }
}

const tagAreaName = ({ area }: Tag): string => {
  if (area != null) {
    return area.name
  } else {
    return 'Inactive'
  }
}

export { tagAreaName, tagStatusColor }
