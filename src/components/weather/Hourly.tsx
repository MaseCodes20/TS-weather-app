interface IHourly {
  temp: number
  timestamp: number
}

function Hourly({ temp, timestamp }: IHourly) {
  const DAY_FORMATTER = new Intl.DateTimeFormat(undefined, { hour: 'numeric' })

  return (
    <div>
      <h3>{DAY_FORMATTER.format(timestamp)}</h3>
      <p>
        {temp}
        <span>&deg;</span>
      </p>
    </div>
  )
}

export default Hourly
