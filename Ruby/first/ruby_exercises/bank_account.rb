class BankAccount
  attr_reader :account_num, :savings, :checking
  @@num_of_accounts = 0
  protected
    def gen_account_num
      return rand(100000)
    end
  public
    def initialize
      @account_num = self.gen_account_num
      @checking = 0
      @savings = 0
      @interest_rate = 0.01
      @@num_of_accounts += 1
    end
    def deposit_checking quantity
      @checking += quantity
      return self
    end
    def deposit_savings quantity
      @savings += quantity
      return self
    end
    def withdraw_savings quantity
      if quantity > @savings
        puts "Insufficient funds!"
      else
        @savings -= quantity
        puts "Success!"
      end
      return self
    end
    def withdraw_checking quantity
      if quantity > @checking
        puts "Insufficient funds!"
      else
        @checking -= quantity
        puts "Success!"
      end
      return self
    end
    def self.view_account_num
      puts @@num_of_accounts
    end
    def view_money
      puts "Total: #{@savings + @checking}"
      return self
    end
    def account_information
      puts "Acct#: #{@account_num}"
      puts "Total: #{@savings + @checking}"
      puts "Savings: #{@savings}"
      puts "Checking: #{@checking}"
      puts "Interest Rate: #{@interest_rate}"
      return self
    end
end

BankAccount.new.deposit_savings(12).deposit_checking(30).view_money.account_information.withdraw_checking(40)
BankAccount.new
BankAccount.view_account_num
