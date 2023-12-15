plugins {
    kotlin("jvm") version "1.7.10"
    application
}

group = "com.example"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

dependencies {
    implementation("io.ktor:ktor-server-netty:1.5.3")
    implementation("ch.qos.logback:logback-classic:1.2.3")
    implementation("io.ktor:ktor-server-core:1.5.3")
}

application {
    applicationDefaultJvmArgs = listOf("-Xmx1G")
    mainClass.set("MainKt")
}
