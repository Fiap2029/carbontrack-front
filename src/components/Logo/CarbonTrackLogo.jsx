import logoIcon from '../../assets/icon-carbontracker.svg'
import styles from './CarbonTrackLogo.module.css'

export default function CarbonTrackLogo({
  size = 'md',
  color = 'white',
  showText = true,
}) {
  const iconSize = size === 'sm' ? 42 : size === 'lg' ? 90 : 64

  return (
    <div className={`${styles.logo} ${styles[size]}`}>
      <img
        src={logoIcon}
        alt="CarbonTrack Space icon"
        width={iconSize}
        height={iconSize}
        className={styles.icon}
      />
      {showText && (
        <span className={styles.text} style={{ color }}>
          <strong>CarbonTrack</strong> Space
        </span>
      )}
    </div>
  )
}
