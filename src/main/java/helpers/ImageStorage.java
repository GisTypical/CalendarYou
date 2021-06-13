package helpers;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.logging.Logger;

import javax.servlet.http.Part;

public class ImageStorage {
    private static final Logger LOGGER = Logger.getLogger("Log");

    private ImageStorage() {
    }

    public static String store(Part filePart, String path) {
        File folder = new File(path + File.separator + "img");
        if (!folder.exists()) {
            folder.mkdirs();
            LOGGER.info("Folder created on " + folder.getPath());
        }
        String filePath = folder + File.separator + filePart.getSubmittedFileName();
        try (FileOutputStream fileOut = new FileOutputStream(filePath)) {
            InputStream in = filePart.getInputStream();
            final byte[] bytes = new byte[in.available()];
            while ((in.read(bytes)) > 0) {
                fileOut.write(bytes);
            }
            return filePath;
        } catch (IOException e) {
            return "";
        }
    }
}
