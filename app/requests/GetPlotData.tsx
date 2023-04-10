import axios from 'axios'
import { Config } from '@/models/Config'
import { Data } from 'plotly.js'
import { API_URL } from '@/models/Constants'

export async function getPlotData (uuid: string): Promise<{ config: Config, data: Data[] }> {
  return await axios.get(`${API_URL}/views/${uuid}`).then((r) => {
    return {
      config: r.data.config as Config,
      data: r.data.data
    }
  })
}

/*
type: string,
    media: string,
    columns: string[],
    title?: string,
    x?: string,
    y?: string,
    color?: string,
    size?: string,
    symbol?: string,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    bounding_box?: string,
    colors?: string[]
 */
