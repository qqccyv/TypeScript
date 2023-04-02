"use strict";
class Notice {
    isActionNotice() {
        return this instanceof ActionNotice;
    }
    isAsyncNotice() {
        return this instanceof AsyncNotice;
    }
    isTransmissionNotice() {
        return this instanceof TransmissionNotice;
    }
    constructor(message, id) {
        this.message = message;
        this.id = id;
    }
}
class ActionNotice extends Notice {
    constructor(message, action) {
        super(message, Date.now().toString());
        this.action = action;
    }
}
class AsyncNotice extends Notice {
    constructor(message, state) {
        super(message, Date.now().toString());
        this.state = state;
    }
}
class TransmissionNotice extends Notice {
    constructor(message, transmited) {
        super(message, Date.now().toString());
        this.transmited = transmited;
    }
}
// 该方法适用于处理一个数据有多重类型，又需要后续根据对应类型做处理的场景，
// 比如虽然前面是用ActionNotice实例化的一条消息，但是后续的一个通用方法会收到一条消息 类型只能确定最基本的Notice，
// 这时候就可以是用基于类型守卫的this，来确认并标记消息的类型，用于后续的处理
const notice = new ActionNotice('', 1);
if (notice.isActionNotice()) {
    notice.action;
}
else if (notice.isAsyncNotice()) {
    notice.state;
}
else if (notice.isTransmissionNotice()) {
    notice.transmited;
}
