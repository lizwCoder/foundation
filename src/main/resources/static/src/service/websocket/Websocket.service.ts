import Vue from 'vue'
export default class WebsocketService {

    constructor(private $eventHub:Vue) {
        this.init();
    }

    init(){
        let socket = new SockJS('/gs-guide-websocket');
        let stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame:any) {

            console.log('Connected: ' + frame);

            stompClient.subscribe('/topic/greetings', function (greeting:object) {

                console.log(greeting);
                //广播
                // this.$eventHub.$emit('event type',greeting)

            });

        });
    }


}

