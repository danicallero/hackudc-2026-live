import { readItems, readSingleton } from '@directus/sdk'
import directus from '~/lib/directus'
import type { Route } from './+types/tv'
import { Loading } from '~/components/Loading'

export async function clientLoader() {
  const sponsors = await directus.request(readItems('sponsors'))
  const schedule = await directus.request(readItems('schedule'))
  const hackingtime = await directus.request(readSingleton('hackingtime'))
  const wifi = await directus.request(readSingleton('wifi'))

  return { sponsors, schedule, hackingtime, wifi }
}

export function HydrateFallback() {
  return <Loading />
}

export default function TV({ loaderData }: Route.ComponentProps) {
  const { sponsors, schedule, hackingtime, wifi } = loaderData

  return (
    <div className="text-white">
      <h1>Hacking Time</h1>
      <p>
        {hackingtime.start} - {hackingtime.end}
      </p>
      <h1>WiFi</h1>
      <p>
        {wifi.ssid} - {wifi.password}
      </p>
      <h1>Sponsors</h1>
      <ul>
        {sponsors.map((sponsor) => (
          <li key={sponsor.id}>{sponsor.name}</li>
        ))}
      </ul>
      <h1>Schedule</h1>
      <ul>
        {schedule.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  )
}
