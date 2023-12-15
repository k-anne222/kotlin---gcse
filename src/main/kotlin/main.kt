// Imports necessary Ktor modules for building the application.
import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.http.content.*

// Entry point of the Kotlin application.
fun main() {
    /*
    Starts a server using Netty (a server engine) on port 8080.
    The word "embedded" means that this server isn't separate; it's built right into your program.
    So, when you start your program, it automatically opens up this server, ready to serve web requests.
    */
    embeddedServer(Netty, port = 8080) {
        // Sets up routes for handling web requests.
        routing {
            /*
            Handles static files from the 'static' folder in resources.
            static("/static"): This creates a route that listens for requests starting with
            /static in the URL.
            */
            static("/static") {
                // resources("static"): This tells Ktor to look in the resources/static directory of your project for files to serve.
                // For example, if there's a request for /static/script.js, Ktor serves the script.js file from that directory.
                resources("static")
            }
            // Route for the root URL ("/").
            get("/") {
                // Attempts to load 'index.html' as a resource to serve as the response.
                val htmlContent = this::class.java.classLoader.getResource("index.html")?.readText()

                /*
                this::class: Refers to the current class.
                In Kotlin, ::class is a way to get a reference to the KClass instance of the object.

                classLoader: The class loader is a part of Java that loads classes and resources from the classpath.
                
                getResource("index.html"): Looks for index.html in the resources folder on the classpath.

                ?.readText(): Safely calls readText() on the result of getResource().
                If getResource() returns null (meaning the file wasn't found), readText() won't be called.
                */

                // If 'index.html' is found, it is served with an HTML content type.
                htmlContent?.let { content ->
                    call.respondText(content, ContentType.Text.Html)
                // If not found, sends a plain text error message.
                } ?: call.respondText("Failed to load index.html", ContentType.Text.Plain)
            }                        
            // Route for the "/about" URL, serving a simple text response.
            get("/about") {
                val htmlContent = this::class.java.classLoader.getResource("about.html")?.readText()
                htmlContent?.let { content ->
                    call.respondText(content, ContentType.Text.Html)
                // If not found, sends a plain text error message.
                } ?: call.respondText("Failed to load about.html", ContentType.Text.Plain)
            }
            // Route for the "/contact" URL, serving a simple text response.
            get("/contact") {
                val htmlContent = this::class.java.classLoader.getResource("contact.html")?.readText()
                htmlContent?.let { content ->
                    call.respondText(content, ContentType.Text.Html)
                // If not found, sends a plain text error message.
                } ?: call.respondText("Failed to load contact.html", ContentType.Text.Plain)
            }
        }        
    // The server is instructed to keep running, awaiting requests.
    }.start(wait = true)
}
