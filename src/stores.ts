import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'
import type FileSystem from 'webnative/fs/index'

import { loadTheme } from '$lib/theme'
import type { ConsumerState, ProducerState } from '$lib/auth/linking'
import type { Device } from '$lib/device'
import type { Session } from '$lib/session'
import type { Theme } from '$lib/theme'

export const theme: Writable<Theme> = writable(loadTheme())

export const sessionStore: Writable<Session> = writable({
  username: '',
  authed: false,
  loading: true,
  backupCreated: null
})

export const filesystemStore: Writable<FileSystem | null> = writable(null)

export const deviceStore: Writable<Device> = writable({ isMobile: true })

export const accountLinkingConsumerStore: Writable<ConsumerState> = writable(
  null
)

export const accountLinkingProducerStore: Writable<ProducerState> = writable(
  null
)
