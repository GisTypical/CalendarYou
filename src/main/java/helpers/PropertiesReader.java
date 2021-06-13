package helpers;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.logging.Logger;

public class PropertiesReader {

    private static String filePath = new File("src/app.properties").getAbsolutePath();
    private static final Logger LOGGER = Logger.getLogger("Log");

    private PropertiesReader() {
    }

    public static String readValue(String value) throws IOException {
        Properties props = new Properties();
        try (FileInputStream stream = new FileInputStream(filePath)) {
            props.load(stream);
        } catch (Exception e) {
            LOGGER.info("Couldn't find" + filePath);
        }

        return props.getProperty(value);
    }
}
