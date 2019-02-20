
export default class WebsocketService {

    constructor($eventHub) {
        this.$eventHub = $eventHub;
        this.init();
    }

    init(){
        let socket = new SockJS('/gs-guide-websocket');
        let stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {

            console.log('Connected: ' + frame);

            stompClient.subscribe('/topic/greetings', function (greeting) {

                console.log(greeting);
                //广播
                // this.$eventHub.$emit('event type',greeting)

            });

        });
    }


}

