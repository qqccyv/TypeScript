interface ITransmissionNotice {
  fileName: string,
  state: number,
  transted: number,
  timeStamp: number
}

const noticeData: Omit<ITransmissionNotice, 'timeStamp'> = {
  fileName: 'test.txt',
  state: 0,
  transted: 1,
}

const timeStamp: Pick<ITransmissionNotice, 'timeStamp'> = { timeStamp: Date.now() }

const tempObject: Record<string, ITransmissionNotice> = {
  test: {
    fileName: 'test',
    state: 0,
    transted: 0,
    timeStamp: 0
  }
}