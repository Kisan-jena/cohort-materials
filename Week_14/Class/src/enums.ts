enum OrderStatus {
    PENDING = "pending",
    PROCESSING = "processing", 
    SHIPPED = "shipped",
    DELIVERED = "delivered",
    CANCELLED = "cancelled"
}

function updateOrderStatus(orderId: string, status: OrderStatus) {
    console.log(`Order ${orderId} is now ${status}`);
}

// Usage
updateOrderStatus("123", OrderStatus.SHIPPED);
updateOrderStatus("456", OrderStatus.DELIVERED);

//^ EX2
enum HTTPStatus {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500
}

function handleAPIResponse(status: HTTPStatus, data: any) {
    switch(status) {
        case HTTPStatus.OK:
            console.log("Success:", data);
            break;
        case HTTPStatus.NOT_FOUND:
            console.log("Resource not found");
            break;
        default:
            console.log("Unexpected status:", status);
    }
}

//^ EX3
 // Numeric enum (auto-incremented)
enum Size {
    SMALL,    // 0
    MEDIUM,   // 1
    LARGE     // 2
}

// String enum (explicit values)
enum Theme {
    LIGHT = "light",
    DARK = "dark",
    AUTO = "auto"
}

// Mixed enum
enum APIResponse {
    SUCCESS = "success",
    ERROR = "error", 
    CODE = 200
}

console.log(Size.MEDIUM)