import com.microsoft.demo.Demo;
import org.junit.Test;
import org.junit.experimental.categories.Category;

import static org.junit.Assert.fail;


@Category(UnitTest.class)
public class MyUnitTest {

    @Test
    public void test_method_1() {
        Demo d = new Demo();
        d.DoSomething(true);
    }

    @Test
    public void test_method_2() {
        fail("failing test!!");
    }
}